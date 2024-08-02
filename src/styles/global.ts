import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		
		font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.POPPINS};
		color: ${({ theme }) => theme.COLORS.TEXT.TEXT_DEFAULT};
	}

	:root {
		font-size: 62.5%;

		/* When in mobile screen size */
		scrollbar-width: none;

	
	}
	
	body {
		background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_400};
		font-size: 1.6rem;
	}
`;
