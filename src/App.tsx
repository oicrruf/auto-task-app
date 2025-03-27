import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Grid as MuiGrid,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Avatar,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import theme from "./theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import Ventas from "./pages/Ventas";
import Clientes from "./pages/Clientes";
import DTEPage from "./pages/DTEPage";

// Create a correctly typed Grid component
const Grid = MuiGrid as React.ComponentType<any>;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        {/* Header */}
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Auto Task
            </Typography>
            <IconButton color="inherit">
              <Avatar sx={{ width: 32, height: 32, bgcolor: "secondary.main" }}>
                U
              </Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
          <Box sx={{ mb: 4 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={true}>
                <Typography variant="h4" component="h1" gutterBottom>
                  Dashboard
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  size="large"
                >
                  New Task
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Grid container spacing={3}>
            {/* Stats Overview */}
            <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <Grid container spacing={3}>
                  {[
                    {
                      title: "Total Tasks",
                      value: "24",
                      icon: <AssignmentIcon color="primary" />,
                    },
                    {
                      title: "Completed",
                      value: "18",
                      icon: <DashboardIcon color="success" />,
                    },
                    {
                      title: "In Progress",
                      value: "6",
                      icon: <AssignmentIcon color="warning" />,
                    },
                  ].map((stat, index) => (
                    <Grid item xs={12} md={4} key={index}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box sx={{ mr: 2 }}>{stat.icon}</Box>
                        <Box>
                          <Typography variant="h5">{stat.value}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {stat.title}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>

            {/* Tasks Cards */}
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={12} md={6} lg={4} key={item}>
                <Card raised>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {item % 2 === 0 ? "High Priority" : "Medium Priority"}
                    </Typography>
                    <Typography variant="h5" component="div" gutterBottom>
                      Task {item}
                    </Typography>
                    <Typography variant="body2">
                      This is a sample task description. Here you would see
                      details about what needs to be done.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View Details</Button>
                    <Button size="small" color="secondary">
                      Mark Complete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Footer */}
        <Box
          component="footer"
          sx={{ py: 3, bgcolor: "primary.main", color: "white", mt: "auto" }}
        >
          <Container maxWidth="lg">
            <Typography variant="body1" align="center">
              © {new Date().getFullYear()} Auto Task App
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
