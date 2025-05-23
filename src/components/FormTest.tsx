import React, { useState } from 'react';

// This component is just for testing the Zapier webhook
export default function FormTest() {
  const [testStatus, setTestStatus] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const testZapierWebhook = async () => {
    setIsLoading(true);
    setTestStatus('Testing connection to Zapier webhook...');

    const testData = {
      fullName: 'Test User',
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      phone: '123-456-7890',
      address: '123 Test St, Test City, TS 12345',
      service: 'Test Service',
      additionalInfo: 'This is a test submission',
      timestamp: new Date().toISOString()
    };

    try {
      // Using Supabase Edge Function as a proxy to avoid CORS issues
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/zapier-webhook`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify(testData)
      });

      console.log('Response status:', response.status);
      
      const textResponse = await response.text();
      console.log('Raw response:', textResponse);
      
      if (response.ok) {
        setTestStatus('✅ SUCCESS: Connection to Zapier webhook is working correctly!');
      } else {
        setTestStatus(`❌ ERROR: Connection failed with status ${response.status}. Check the console for details.`);
      }
    } catch (error) {
      console.error('Error testing Zapier webhook:', error);
      setTestStatus(`❌ ERROR: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Zapier Webhook Test</h3>
        
        {testStatus && (
          <div className={`mb-3 p-2 rounded text-sm ${testStatus.includes('SUCCESS') ? 'bg-green-100' : testStatus.includes('ERROR') ? 'bg-red-100' : 'bg-blue-100'}`}>
            {testStatus}
          </div>
        )}
        
        <button
          onClick={testZapierWebhook}
          disabled={isLoading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors disabled:opacity-50 w-full"
        >
          {isLoading ? 'Testing...' : 'Test Zapier Connection'}
        </button>
      </div>
    </div>
  );
}