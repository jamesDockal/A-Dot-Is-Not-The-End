import React from "react";
import "../styles/chaptercard.css";

type IChapterCardProps = {
  title: string;
  content: string;
};

export default function ChapterCard({ title, content }: IChapterCardProps) {
  return (
    <div className="chapter-card">
      <div className="left-components">
        <span className="drag icon material-icons">drag_indicator</span>
        <div className="chapter-number-circle">
          <small className="chapter-number">1</small>
        </div>
        <span className="chapter-title">{title}</span>
      </div>
      <div className="right-components">
        <div className="icon-box">
          <span className="icon material-icons">visibility</span>
        </div>
        <div className="icon-box">
          <span className="icon material-icons">open_in_new</span>
        </div>
      </div>
    </div>
  );
}
