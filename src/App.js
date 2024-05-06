import BookCard from "./BookCard";

const spanishBooks = [
    {
      title: "Easy Spanish Step-By-Step",
      author: "Barbara Bregstein",
      description: "A gradual approach to learning Spanish, focusing on grammar and vocabulary building.",
      rating: 4.5,
    },
    {
      title: "Madrigal's Magic Key to Spanish",
      author: "Margarita Madrigal",
      description: "Emphasizes mnemonic devices and memory tricks to aid in language learning.",
      rating: 4.0,
    },
    {
      title: "Spanish Grammar in Context",
      author: "Juan Kattán-Ibarra",
      description: "Provides a comprehensive overview of Spanish grammar with practical examples and exercises.",
      rating: 4.3,
    },
    {
      title: "Practice Makes Perfect: Spanish Verb Tenses",
      author: "Dorothy Richmond",
      description: "Focuses specifically on mastering Spanish verb conjugations and tenses.",
      rating: 4.2,
    },
    {
      title: "Complete Spanish Step-by-Step",
      author: "Barbara Bregstein",
      description: "Provides a structured approach to learning Spanish grammar, vocabulary, and conversation.",
      rating: 4.4,
    },
    {
      title: "Living Language Spanish, Complete Edition",
      author: "Living Language",
      description: "Comprehensive course including textbooks, audio CDs, and online resources for learning Spanish at various levels.",
      rating: 4.6,
    },
    {
      title: "Spanish for Dummies",
      author: "Susana Wald and Cecie Kraynak",
      description: "Covers essential Spanish grammar, vocabulary, and conversational phrases in an easy-to-understand format.",
      rating: 4.1,
    },
    {
      title: "Practice Makes Perfect: Spanish Conversation",
      author: "Jean Yates",
      description: "Focuses on improving conversational skills in Spanish through practice exercises and dialogues.",
      rating: 4.3,
    },
    {
      title: "Breaking Out of Beginner's Spanish",
      author: "Joseph J. Keenan",
      description: "Designed for learners who already have basic knowledge of Spanish and aims to help them progress to a more advanced level.",
      rating: 4.0,
    },
    {
      title: "501 Spanish Verbs",
      author: "Christopher Kendris",
      description: "A reference guide providing conjugation tables for 501 commonly used Spanish verbs, along with usage examples and exercises.",
      rating: 4.1,
    }
  ];
  
  function App() {
  return (
    <div>
      <h1>My Spanish Learning Books</h1>
     { spanishBooks.map(b => <BookCard book={b} /> ) }
     </div>
  );
}

export default App;
