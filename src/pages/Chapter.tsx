import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import api from "../services/api";
import "../styles/chapter.css";

type IChapterProps = {
  match: {
    params: {
      book: string;
      chapter: number;
    };
  };
};

type IChapters = {
  title: string;
  content: string;
};

export default function Chapter({ match }: IChapterProps) {
  const [chapter, setChapter] = useState<IChapters | undefined>();
  const token = Cookies.get("token");

  const history = useHistory();

  if (!token) {
    history.push("/login");
  }

  async function searchBook() {
    try {
      const searchedBook = await api.get(`/books/${match.params.book}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log("searchedBook", searchedBook.data.book);
      setChapter(searchedBook.data.book.chapters[match.params.chapter]);
    } catch (e) {
      console.log("error", e.response.data.error);
    }
  }

  useEffect(() => {
    searchBook();
  }, []);
  console.log("book", chapter);

  return (
    <div className="chapter-contener">
      <Header />
      <div className="chapter-content">{chapter?.content}</div>
    </div>
  );
}
