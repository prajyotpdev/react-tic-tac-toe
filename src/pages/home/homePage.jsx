import React, { useEffect } from "react";
import styles from "./home.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PickSign from "./playChoice";
import { ColorButton, Heading } from "../../components/style/styleComponents";

const Home = () => {
  const store = useSelector((store) => store.app);
  const navigate = useNavigate();

  useEffect(() => {
    if (store.initialChance && store.chance ) {
      navigate("/play");
    }
  }, []);

  return (
    <div className={styles.box}>
      <div className={styles.select}>
        <Heading $color="white"> PICK PLAYER </Heading>
        <PickSign />
      </div>
      <ColorButton
        $bgColor="#F2B237"
        onClick={() => {
          if (store.chance && store.initialChance) {
            navigate("/play");
          }
        }}
      >
        NEW GAME ( VS CPU )
      </ColorButton>
      <ColorButton $bgColor="#32C4C3">
        NEW GAME ( VS HUMAN ) Coming soon
      </ColorButton>
      <div className={styles.invitebtn}>
        <ColorButton $bgColor="#F2B237"> Invite your friend </ColorButton>
      </div>
    </div>
  );
};

export default Home;
