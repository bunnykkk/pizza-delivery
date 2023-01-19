import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "../styles/Login.css";
import rectangle from "../img/Rectangle2.png";
import pizzaimg from "../img/pizza_right1.png";

const LoginPage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundImage: `url(${rectangle})`,
      }}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}>
        <Grid
          item
          lg={5}
          md={5}
          sm={5}
          xs={12}
          sx={{
            display: {
              sm: "flex",
              xs: "flex",
            },
            flexDirection: "column",
            alignItems: { md: "flex-start", sm: "center", xs: "center" },
            justifyContent: { md: "flex-start" },
          }}>
          <div className="login_title">
            <h2>Личные данные</h2>
          </div>

          <form action="" className="form">
            <div className="form_inp">
              <label for="name">Имя</label>
              <input id="name" type="text" placeholder="Имя" />
            </div>
            <div className="form_inp">
              <label for="surname">Фамилия</label>
              <input id="surname" type="text" placeholder="Фамилия" />
            </div>
            <div className="form_inp">
              <label for="number">Номер</label>
              <input id="number" type="tel" placeholder="Номер" />
            </div>

            <div className="form_inp">
              <label for=""></label>
              <input id="" type="email" placeholder="Почта" />
            </div>

            <div className="form_inp__down">
              <input type="number" placeholder="Введите день" />
              <input type="text" placeholder="Введите месяц" />
            </div>
            <div className="form_inp__shortplaceholder">
              <input type="number" placeholder="день" />
              <input type="text" placeholder="месяц" />
            </div>
            <div className="form_btn">
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  backgroundColor: "#9C1414",
                  color: "white",
                  borderRadius: "25px",
                  fontSize: { xl: "24px", lg: "24px", md: "18px", sm: "18px" },
                  width: { lg: 192, md: 192, sm: 192, xs: 192 },
                }}>
                Сохранить
              </Button>
            </div>
          </form>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={6}
          xs={12}
          sx={{
            display: "flex",
            // justifyContent: "center",
            alignItems: "flex-end",
            flexDirection: "column",
          }}>
          <Box
            sx={{
              maxWidth: "522px",
              paddingTop: { md: "90px", sm: "90px", xs: "45px" },

              mb: "36px",
              alignSelf: "flex-start",
            }}>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                color: "white",
                fontSize: {
                  xl: "24px",
                  lg: "23px",
                  md: "16px",
                  sm: "16px",
                  marginTop: "40%",
                },
                textAlign: "justify",
              }}>
              В личном кабинете будут отображаться скидки и промо-коды, которые
              мы дарим на различные празники и дни рождения
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              alignSelf: "flex-start",
            }}>
            <Typography
              style={{ fontFamily: "Arial", fontSize: "16px", color: "white" }}>
              Поставьте галочку, если хотите получать актуальные новости
            </Typography>
            <input className="login_checkbox" type="checkbox" />
          </Box>
          <div className="login_img">
            <img src={pizzaimg} alt="" />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
