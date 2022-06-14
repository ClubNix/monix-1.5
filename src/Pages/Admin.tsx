import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FormEvent, useState } from "react";
import { setToken } from "../TokenService";

const Admin = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loginCallback = (evt: FormEvent<HTMLFormElement>) => {
    //Pour éviter le refresh de la page
    evt.preventDefault();

    //TODO : Appel Back end pour recevoir un token
    //Temporaire le temps de mettre un vrai login en palce
    setToken(`${login}`);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "20px",
      }}
    >
      <Typography variant="h2">Admin panel</Typography>
      <form onSubmit={loginCallback}>
        <TextField
          required
          name="login"
          label="Identifiant"
          variant="filled"
          margin="normal"
          value={login}
          onChange={(evt) => setLogin(evt.currentTarget.value)}
        />
        <br />
        <TextField
          required
          name="password"
          type="password"
          label="Mot de passe"
          variant="filled"
          margin="normal"
          value={password}
          onChange={(evt) => setPassword(evt.currentTarget.value)}
        />
        <br />
        <Button type="submit">Login</Button>
      </form>
    </Box>
  );
};

export default Admin;
