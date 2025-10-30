import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Guest from "../layouts/Guest";
import AdmLayout from "../layouts/AdmLayout";

import ConsultaProvider from "../contexts/ConsultaProvider";
import ProfissionaisProvider from "../contexts/ProfissionalProvider";
import HorariosProfissionalProvider from "../contexts/HorariosProfissionalProvider.jsx";

import Home from "../pages/Home/Home";
import Pacientes from "../pages/Pacientes/Pacientes";
import NotFound from "../pages/NotFound/NotFound";
/* import Show from '../pages/Show/Show'; */
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Consultas from "../pages/Consultas/Consultas";
import Users from "../pages/Users/Users";
import Logout from "../pages/Logout/Logout";
import Profissionais from "../pages/Profissionais/Profissionais";
import HorariosProfissional from "../pages/HorariosProfissional/HorariosProfissional";
import ProfissionalDashboard from "../pages/ProfissionalDashboard/ProfissionalDashboard";

import { Private } from "../components/Private/Private";
import AuthLayout from "../layouts/AuthLayout";
import ProfissionalLayout from "../layouts/ProfissionalLayout";

import ProfissionalDashboardWrapper from "../wrappers/ProfissionalDashboardWrapper";
import ConsultaShow from "../pages/ConsultaShow/ConsultaShow.jsx";
import Calendario from "../pages/Calendario/Calendario.jsx";
import ShowProfissional from "../pages/ShowProfissional/ShowProfissional.jsx";
import PacienteProvider from "../contexts/PacienteProvider.jsx";
import PacienteShow from "../pages/PacienteShow/PacienteShow.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/" element={<Guest />}>
                {/* <Route path="/" element={<Home />} /> */}
                {/* <Route
                    path="/profissionais"
                    element={
                        <ProfissionaisProvider>
                            <Profissionais />
                        </ProfissionaisProvider>
                    }
                /> */}

                <Route path="/register" element={<SignUp />} />
                <Route
                    path="/horarios"
                    element={
                        <HorariosProfissionalProvider>
                            <HorariosProfissional />
                        </HorariosProfissionalProvider>
                    }
                />
            </Route>

            <Route
                path="/"
                element={
                    <Private>
                        <AdmLayout />
                    </Private>
                }
            >
                {/* TODO: separar pacientes e consultas para o layout de paciente e profissional de saúde */}
                <Route index element={<Users />} />
                <Route path="/users" element={<Users />} />
                {/* <Route path="/users/:id" element={<ShowUser />} /> */}
                <Route path="/logout" element={<Logout />} />
                {/*                 <Route path="/adm/pacientes" element={<Pacientes />} />
                 */}{" "}
                <Route
                    path="/adm/consultas"
                    element={
                        <ConsultaProvider>
                            <Consultas />
                        </ConsultaProvider>
                    }
                />
            </Route>

            <Route
                path="/"
                element={
                    <Private>
                        <ProfissionalLayout />
                    </Private>
                }
            >
                <Route index element={<ProfissionalDashboardWrapper />} />
                <Route
                    path="/ProfissionalDashboard"
                    element={<ProfissionalDashboardWrapper />}
                />
                <Route
                    path="/consultas"
                    element={
                        <ConsultaProvider>
                            <Consultas />
                        </ConsultaProvider>
                    }
                />
                <Route
                    path="/calendario"
                    element={
                        <ConsultaProvider>
                            <Calendario />
                        </ConsultaProvider>
                    }
                />
                <Route
                    path="/consultas/:id"
                    element={
                        <ConsultaProvider>
                            <ConsultaShow />
                        </ConsultaProvider>
                    }
                />
                <Route
                    path="/profissionais"
                    element={
                        <ProfissionaisProvider>
                            <Profissionais />
                        </ProfissionaisProvider>
                    }
                />
                <Route
                    path="/profissionais/:id"
                    element={
                        <ProfissionaisProvider>
                            <ShowProfissional />
                        </ProfissionaisProvider>
                    }
                />
                <Route
                    path="/pacientes"
                    element={
                        <PacienteProvider>
                            <Pacientes />
                        </PacienteProvider>
                    }
                />
                <Route path="/pacientes/:id" element={
                    <PacienteProvider>
                        <PacienteShow />
                    </PacienteProvider>
                } />
            </Route>

            <Route path="*" element={<NotFound />} />
        </>
    )
);

export default router;
