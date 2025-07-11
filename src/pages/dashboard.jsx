/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useState } from 'react';
import insertIcon from '../../src/graphics/Dashboard/Initial Menu/insert.svg';
import uploadIcon from '../../src/graphics/Dashboard/Initial Menu/upload.svg';
import searchIcon from '../../src/graphics/Dashboard/Initial Menu/search.svg';

/** To-do: Fix the size of every screen (mobile, lap), remove "clamp" */

// Ensures all icon+text blocks have the same width for visual alignment
const iconBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(10rem, 22vw, 12rem); /* responsive width based on screen */
`;

// Responsive image style with max size limit
const imageStyle = css`
  width: clamp(3.2rem, 7vw, 6.5rem);
  height: clamp(3.2rem, 7vw, 6.5rem);
  transition: transform 0.3s ease;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.23);
  object-fit: cover;

  &:hover {
    transform: scale(1.1);
  }
`;

// Text under each icon: styled for readability and consistency
const descrFeatures = css`
  margin-top: 1.05rem;
  font-family: "Cascadia Mono", system-ui, sans-serif;
  font-size: 0.9rem;
  text-align: center;
  max-width: 95%;
  min-height: 3rem;
  word-break: break-word;
`;

function DashboardPage() {
  return (
    <>
    <div 
      css={css`
        margin-top: 7rem;
      `}
    >
      <div
        css={css`
          margin-top: 4rem;

          @media (max-width: 500px) {
            margin-top: 2.5rem; /* reduce top margin on very small screens */
          }
        `}
      >
        <h1
          css={css`
            font-family: 'Outfit', sans-serif;
            font-size: clamp(1.8rem, 3.5vw, 2.4rem); /* responsive title */
            letter-spacing: 0.04em;
            word-spacing: 0.2em;
            text-align: center;
          `}
        >
          Get started with a new{' '}
          <span css={css`color: #15a497`}>Project</span>
        </h1>
      </div>

      <div
        css={css`
          margin-top: 3.7rem;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: clamp(2rem, 5vw, 4rem); /* responsive spacing between icon blocks */
          flex-wrap: wrap; /* enables wrapping on smaller screens */
        `}
      >
        <div css={iconBox}>
          <img
            src={insertIcon}
            alt="Insert data Icon"
            css={imageStyle}
            role="button" /* accessibility: treat image like a button */
            tabIndex={0}   /* makes image focusable with keyboard */ // to test
            // onClick={() => console.log("Icon clicked!")}
          />
          <p css={descrFeatures}>Insert your data</p>
        </div>

        <div css={iconBox}>
          <img
            src={uploadIcon}
            alt="Upload data Icon"
            css={imageStyle}
            role="button"
            tabIndex={0} // to test
            // onClick={() => console.log("Icon clicked!")}
          />
          <p css={descrFeatures}>
            Upload a document <span css={css`font-size: 0.7rem; display: block; margin-top: -0.009rem;`}>(.pdf, .doc, etc...)</span>
          </p>
        </div>

        <div css={iconBox}>
          <img
            src={searchIcon}
            alt="Search data Icon"
            css={imageStyle}
            role="button"
            tabIndex={0} // to test
            // onClick={() => console.log("Icon clicked!")}
          />
          <p css={descrFeatures}>Browse from Web</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default DashboardPage;
