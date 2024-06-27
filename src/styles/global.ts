import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	}
	
	body {
		background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_100};
		color: ${({ theme }) => theme.COLORS.TEXT.TEXT_DEFAULT};
	}
`;
