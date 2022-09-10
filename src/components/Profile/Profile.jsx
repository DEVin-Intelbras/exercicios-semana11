import PropTypes from "prop-types";
import { usePerfil } from "../../contexts";
import { Button } from "../Button";
import { Container } from "./Profile.styles";

export const Profile = ({ profile }) => {
  const { handleFollow } = usePerfil();

  return (
    <Container>
      <p>{profile.nome}</p>
      <Button onClick={() => handleFollow(profile.id)}>
        {profile.seguindo ? "Seguindo" : "Seguir"}
      </Button>
    </Container>
  );
};

Profile.propTypes = {
  profile: PropTypes.object,
};
