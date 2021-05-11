export const goToHome = (history) => {
    history.push("/");
  };

  export const goToSingUp = (history) => {
    history.push("/cadastro");
  };

  export const goToLogin = (history) => {
    history.push("/login");
  };

  export const goToAddMusic = (history) => {
    history.push("/adicionar-musica");
  };

  export const goToMusicDetails = (history,id) => {
    history.push(`/musica/detalhes/${id}`);
  };
