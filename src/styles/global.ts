import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	:root {
		font-size: 62.5%;
		scrollbar-width: none;
	}

	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.POPPINS};
		color: ${({ theme }) => theme.COLORS.TEXT.TEXT_DEFAULT};
	}
	
	body {
		background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_200};
		font-size: 1.6rem;
	}
`;
