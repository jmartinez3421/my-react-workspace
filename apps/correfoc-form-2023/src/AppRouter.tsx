import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Welcome } from "@/pages/Welcome";
import { Form } from "@/pages/Form";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome />,
    },
    {
        path: "/form",
        element: <Form />,
    },
]);

export const AppRouter = () => (
    <RouterProvider router={router} />
)
