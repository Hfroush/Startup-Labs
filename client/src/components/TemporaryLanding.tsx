import { Mail, Linkedin } from "lucide-react";

export default function TemporaryLanding() {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        background: 'linear-gradient(135deg, hsl(218, 70%, 46%) 0%, hsl(244, 61%, 54%) 100%)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={{ textAlign: 'center', padding: '1rem', maxWidth: '600px' }}>
        {/* Logo/Company Name */}
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Startup Labs <span style={{ color: '#F59E0B' }}>Global</span>
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
            Innovation Program Design & Delivery
          </p>
        </div>

        {/* Contact Information */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '1.5rem',
            gap: '1rem'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Mail size={20} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>Email</p>
              <a 
                href="mailto:hello@startup-labs.org" 
                style={{ 
                  color: 'rgba(219, 234, 254, 1)',
                  textDecoration: 'none',
                  fontSize: '1rem'
                }}
                onMouseOver={(e) => (e.target as HTMLElement).style.color = 'white'}
                onMouseOut={(e) => (e.target as HTMLElement).style.color = 'rgba(219, 234, 254, 1)'}
              >
                hello@startup-labs.org
              </a>
            </div>
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Linkedin size={20} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>LinkedIn</p>
              <a 
                href="https://www.linkedin.com/company/startup-labs-org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: 'rgba(219, 234, 254, 1)',
                  textDecoration: 'none',
                  fontSize: '1rem'
                }}
                onMouseOver={(e) => (e.target as HTMLElement).style.color = 'white'}
                onMouseOut={(e) => (e.target as HTMLElement).style.color = 'rgba(219, 234, 254, 1)'}
              >
                Connect with us
              </a>
            </div>
          </div>
        </div>

        {/* Status Message */}
        <div>
          <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
            Website under construction - Coming soon
          </p>
        </div>
      </div>
    </div>
  );
}