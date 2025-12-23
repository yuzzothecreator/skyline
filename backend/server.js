const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Ensure data directory exists
const DATA_DIR = path.join(__dirname, 'data');
const CONTACT_FILE = path.join(DATA_DIR, 'contacts.json');

async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
  try {
    await fs.access(CONTACT_FILE);
  } catch {
    await fs.writeFile(CONTACT_FILE, '[]', 'utf8');
  }
}

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    await ensureDataDir();
    
    const { name, email, phone, service, message } = req.body;

    // Validate
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Create contact object
    const contact = {
      id: Date.now(),
      name,
      email,
      phone: phone || '',
      company: req.body.company || '',
      service: service || 'general',
      message,
      status: 'new',
      timestamp: new Date().toISOString(),
      ip: req.ip
    };

    // Read existing contacts
    const data = await fs.readFile(CONTACT_FILE, 'utf8');
    const contacts = JSON.parse(data);
    
    // Add new contact
    contacts.push(contact);
    
    // Save to file
    await fs.writeFile(CONTACT_FILE, JSON.stringify(contacts, null, 2), 'utf8');

    console.log('Contact saved:', contact);

    // Log to console (for testing)
    console.log('📧 New Contact Form Submission:');
    console.log('👤 Name:', name);
    console.log('📧 Email:', email);
    console.log('📞 Phone:', phone || 'Not provided');
    console.log('🏢 Company:', req.body.company || 'Not provided');
    console.log('🔧 Service:', service || 'Not specified');
    console.log('💬 Message:', message);
    console.log('⏰ Timestamp:', new Date().toLocaleString());
    console.log('─────────────────────────────');

    // Return success
    res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully!',
      data: contact
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      error: 'Failed to submit form',
      message: 'Please try again or email us directly at info@skylineinnovation.com'
    });
  }
});

// Get all contacts (admin endpoint)
app.get('/api/admin/contacts', async (req, res) => {
  try {
    await ensureDataDir();
    const data = await fs.readFile(CONTACT_FILE, 'utf8');
    const contacts = JSON.parse(data);
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load contacts' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'Skyline Innovation API',
    version: '1.0.0'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Skyline Innovation API running on http://localhost:${PORT}`);
  console.log(`📝 Contact forms will be saved to: ${CONTACT_FILE}`);
});