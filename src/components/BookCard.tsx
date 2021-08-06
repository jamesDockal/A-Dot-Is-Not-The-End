import React, { useEffect, useState } from "react";
import ChapterCard from "./ChapterCard";
import api from "../services/api";
import "../styles/book.css";

type IBook = {
  title: string;
  chapters: [
    {
      title: string;
      content: string;
    }
  ];
};

export default function BookCard() {
  const [books, setBooks] = useState<IBook[] | undefined>();

  useEffect(() => {
    async function getAllPosts() {
      const { books } = await (await api.get("/books")).data;

      setBooks(books);
    }
    getAllPosts();
  }, []);

  return (
    <div className="all-books">
      {books?.map((book) => (
        <div className="book-container">
          <strong className="class-name">1ª Série</strong>
          <div className="chapters">
            <span className="book-verse">Frente A</span>
            <div className="all-chapters">
              {book.chapters.map((chapter) => (
                <ChapterCard title={chapter.title} content={chapter.content} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
