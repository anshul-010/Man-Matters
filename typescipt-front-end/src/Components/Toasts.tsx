import * as css from "../Styles/ToastsStyles";

import { Box, Image, Text } from "@chakra-ui/react";

export const CartsUpdatedToast = () => {
  return (
    <Box css={css.Outer}>
      <Image />
      <Text>Carts Updated</Text>
    </Box>
  );
};
