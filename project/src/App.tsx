import React, { useState } from 'react';
import { Mail, Loader2, RefreshCcw } from 'lucide-react';

function App() {
  const [summary, setSummary] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSummary = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://cloud.activepieces.com/api/v1/webhooks/81vJYa3c4AkY4B1U4lR9x/sync');
      const data = await response.json();
      setSummary(data.summary || 'No summary available');
    } catch (err) {
      setError('Failed to fetch summary. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Mail className="w-6 h-6 text-indigo-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Email Summary</h1>
            </div>
            <button
              onClick={fetchSummary}
              disabled={loading}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <RefreshCcw className="w-5 h-5" />
              )}
              <span className="ml-2">{loading ? 'Processing...' : 'Get Summary'}</span>
            </button>
          </div>

          {/* Summary Display */}
          <div className="bg-gray-50 rounded-xl p-6">
            {error ? (
              <div className="text-red-500 text-center">
                <p>{error}</p>
              </div>
            ) : summary ? (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700">Email Summary</h2>
                <p className="text-gray-600 leading-relaxed">{summary}</p>
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <p>Click "Get Summary" to fetch your email summary</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Powered by AI - Get quick summaries of your emails</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;