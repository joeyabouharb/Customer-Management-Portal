import { createElement } from "react";
import { Route } from "react-router-dom";
import CustomerAddView from "../components/CustomerAddView";
import CustomerEditView from "../components/CustomerEditView";
import HomeView from "../components/HomeView";

const routes = [
    {
        path: '/',
        exact: true,
        component: HomeView
    },
    {
        path: '/add',
        exact: true,
        component: CustomerAddView
    },
    {
        path: '/edit',
        exact: true,
        component: CustomerEditView
    }
];
export const Router = routes.map(
    ({
        path, exact, component, ...rest
    }) => createElement(
        Route, {
        key: path,
        path,
        exact,
        render: (props: any) => {
            const { location } = props;
            const {  state } = location;
            return createElement(component, { ...props, ...state, ...rest })
        },
    },
    ),
);