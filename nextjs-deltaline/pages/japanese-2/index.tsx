import type { NextPage } from "next";
import { NavbarMain } from "../../lib/index-components/navbar-main";

import { Group, Title, BackgroundImage } from "@mantine/core";

const japanese2: NextPage = () => {
  return (
    <div>
      <NavbarMain />
      <BackgroundImage
        src="https://raw.githubusercontent.com/No767/Deltaline/dev/site/css/assets/background.webp"
        sx={{
          height: 350,
        }}
      >
        <Group align="center" direction="column" spacing="xs" mx={50}>
          <Title
            align="center"
            sx={{
              color: "#F8F9FA",
            }}
            pt={150}
          >
            Japanese 2
          </Title>
        </Group>
      </BackgroundImage>
    </div>
  );
};

export default japanese2;
