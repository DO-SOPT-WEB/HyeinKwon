import styled from "styled-components";

export default function UserPic() {
  return (
    <ImgBox src="https://item.kakaocdn.net/do/2c8b4c99939e42946dadfad7d7d1e099b3a18fdf58bc66ec3f4b6084b7d0b570" />
  );
}

const ImgBox = styled.img`
  width: 10rem;
  height: 10rem;
  border: 1px solid ${({ theme }) => theme.colors.subTextColor};
  border-radius: 50%;
`;
