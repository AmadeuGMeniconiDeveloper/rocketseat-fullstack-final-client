import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		
		font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.POPPINS};
		color: ${({ theme }) => theme.COLORS.TEXT.TEXT_DEFAULT};
	}
	
	body {
		background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_400};
	}
`;
