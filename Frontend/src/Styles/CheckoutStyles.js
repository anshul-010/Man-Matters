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
