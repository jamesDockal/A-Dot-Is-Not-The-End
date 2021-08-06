import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/chaptercard.css";

type IChapterCardProps = {
  book: {
    uuid: string;
    title: string;
  };
  title: string;
  chapterIndex: number;
};

export default function ChapterCard({
  title,
  book,
  chapterIndex,
}: IChapterCardProps) {
  const history = useHistory();

  function seeChapter() {
    history.push(`/${book.title}/${chapterIndex}`);
  }

  return (
    <div className="chapter-card">
      <div className="left-components">
        <span className="drag icon material-icons">drag_indicator</span>
        <div className="chapter-number-circle">
          <small className="chapter-number">1</small>
        </div>
        <span onClick={() => seeChapter()} className="chapter-title">
          {title}
        </span>
      </div>
      <div className="right-components">
        <div className="icon-box">
          <span className="icon material-icons">visibility</span>
        </div>
        <div className="icon-box" onClick={() => seeChapter()}>
          <span className="icon material-icons">open_in_new</span>
        </div>
      </div>
    </div>
  );
}
