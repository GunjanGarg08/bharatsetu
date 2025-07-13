import { useState, useEffect } from 'react';

const languagePlaceholders = {
  Hindi: 'उदाहरण: मुझे tenant से notice मिला है, क्या करूं?',
  English: 'e.g. I received a notice from my tenant, what should I do?',
  Punjabi: 'ਉਦਾਹਰਨ: ਮੈਨੂੰ ਕਿਰਾਏਦਾਰ ਵਲੋਂ ਨੋਟਿਸ ਮਿਲਿਆ ਹੈ, ਮੈਂ ਕੀ ਕਰਾਂ?',
  Bengali: 'উদাহরণ: আমার ভাড়াটিয়া থেকে একটি নোটিশ পেয়েছি, এখন কী করব?'
};

const AskQuestion = () => {
  const [question, setQuestion] = useState('');
  const [language, setLanguage] = useState('Hindi');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [placeholder, setPlaceholder] = useState(languagePlaceholders['Hindi']);

  useEffect(() => {
    setPlaceholder(languagePlaceholders[language]);
  }, [language]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAnswer('');
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, language })
      });

      const data = await res.json();
      if (res.ok) {
        setAnswer(data.answer);
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10" style={{ backgroundImage: `url('/src/assets/ask-background.png')` }}>
      <div className="fixed inset-0 bg-white/30 backdrop-blur-0 z-0"/>
      <div className="bg-white/30 backdrop-blur-xl shadow-2xl rounded-3xl p-8 max-w-xl w-full border border-white/50">
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold text-teal-900 flex items-center justify-center gap-2">
            Ask a Legal Question
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-800 mb-2">Your Question</label>
            <textarea
              rows="4"
              required
              placeholder={placeholder}
              className="w-full p-4 border border-teal-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-800 mb-2">Preferred Language</label>
            <select
              className="w-full p-3 rounded-xl border border-teal-300 bg-teal-50 text-gray-800 shadow-sm focus:ring-2 focus:ring-teal-500"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>Hindi</option>
              <option>English</option>
              <option>Punjabi</option>
              <option>Bengali</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white text-lg py-3 rounded-xl font-semibold shadow-lg transition duration-200 disabled:opacity-60"
          >
            {loading ? 'Generating Answer...' : 'Submit'}
          </button>
        </form>

        {answer && (
          <div className="mt-8 p-5 bg-green-50 border border-green-300 rounded-xl shadow text-green-900 whitespace-pre-wrap">
            <p className="font-bold mb-2">SetuBot:</p>
            {answer}
          </div>
        )}

        {error && (
          <div className="mt-6 p-4 bg-red-100 border border-red-300 text-red-800 rounded-xl shadow">
            <strong>Error:</strong> {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default AskQuestion;