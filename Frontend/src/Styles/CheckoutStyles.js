import { css } from "@emotion/react";

export const NavOuter = css`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  border-radius: 0px 0px 8px 8px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const InnerNavCont = css`
  margin: auto;
  width: 72%;
  height: 60px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const LeftOptionsCont = css`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 22px;
  font-size: 18px;
  font-weight: 600;

  svg {
    cursor: pointer;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

// ********** Middle Part *************
export const MiddleOuter = css`
  margin: auto;
  width: 72%;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const StepperBox = css`
  margin: auto;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 30px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const EachStepBox = css`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  p {
    font-size: 14px;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const NumBoxStepper = css`
  display: flex;
  place-items: center;
  place-content: center;
  border: 1px solid;
  width: 26px;
  height: 26px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 10px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

/* 

export const TechStack = css`

@media (max-width: 992px) {
}
@media (max-width: 768px) {
}
@media (max-width: 480px) {
}
`;

*/
