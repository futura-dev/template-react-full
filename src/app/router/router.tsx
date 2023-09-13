import {
  Navigate,
  Outlet,
  RouteObject,
  createBrowserRouter
} from "react-router-dom";
import { QueryDemo } from "../features/QueryDemo/QueryDemo";
import { TemplateSidebar } from "../shared/components/templates/TemplateSidebar/TemplateSidebar";
import { TodoListRoot } from "../features/Todo/TodoListRoot";
import { TemplateHeader } from "../shared/components/templates/TemplateHeader/TemplateHeader";
import { TemplatePage } from "../shared/components/templates/TemplatePage/TemplatePage";
import { SignIn } from "../features/SignIn/SignIn";
import { AuthGuard } from "../shared/components/z/AuthGuard/AuthGuard";

export const routes: RouteObject[] = [
  {
    path: "/sign-in",
    element: (
      <TemplatePage>
        <SignIn />
      </TemplatePage>
    )
  },
  {
    path: "/",
    element: (
      <AuthGuard>
        <TemplateSidebar>
          <TemplateHeader>
            <Outlet />
          </TemplateHeader>
        </TemplateSidebar>
      </AuthGuard>
    ),
    children: [
      {
        path: "home",
        element: <></>
      },
      {
        path: "databases",
        element: <></>
      },
      {
        path: "trash",
        element: <></>
      },
      {
        path: "accessibility",
        element: <></>
      },
      {
        path: "todos",
        element: <TodoListRoot />
      }
    ]
  }
];

export const router = createBrowserRouter(routes);
