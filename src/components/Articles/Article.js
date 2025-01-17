import React, { useState, useEffect } from "react";
import "./Article.css";
import { useLocation } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import TextToSpeech from "../Speech/TextToSpeech";

const Article = () => {
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);

  console.log(state, "here");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loading ? (
        <div className="container py-3 ">
          <Spinner />
        </div>
      ) : (
        <div>
          <h1
            style={{
              fontSize: "40px",
              color: "gray",
              fontWeight: "bold",
              borderBottom: "1px solid black",
            }}
          >
            {state?.author}
          </h1>
          <article className="news-article ">
            <header>
              <h1 style={{ fontWeight: "bold" }}>{state?.title}</h1>
            </header>
            <main style={{ dislay: "inline", borderBottom: "2px solid black" }}>
              <div className="row">
                <div className="col-md-5">
                  <div
                    className="image"
                    style={{
                      height: 600,
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "10%",
                      backgroundImage: `url(${state?.image})`,
                    }}
                  ></div>
                </div>
                <div className="col-md-7">
                  <div
                    style={{
                      textAlign: "justify",
                      fontSize: "18px",
                      margin: "20px",
                    }}
                  >
                    <TextToSpeech text={state?.description} />
                  </div>

                  <p
                    style={{
                      textAlign: "justify",
                      fontSize: "18px",
                      margin: "20px",
                    }}
                  >
                    {state?.description}
                  </p>
                </div>
              </div>
            </main>
            <footer>
              <h3>
                To watch the full article:
                <a href={state?.url}>{state?.url}</a>
              </h3>
            </footer>
          </article>
        </div>
      )}
    </>
  );
};

export default Article;
