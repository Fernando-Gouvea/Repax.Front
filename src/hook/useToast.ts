// import * as React from "react";
// import type { ToastActionElement, ToastProps } from "../components/ui/toast";
// //import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

// /* -------------------------------------------------------------------------- */
// /*                                   CONFIG                                   */
// /* -------------------------------------------------------------------------- */

// const TOAST_LIMIT = 3;
// const DEFAULT_TOAST_DURATION = 5000;

// /* -------------------------------------------------------------------------- */
// /*                                    TYPES                                   */
// /* -------------------------------------------------------------------------- */

// export type ToasterToast = ToastProps & {
//   id: string;
//   title?: React.ReactNode;
//   description?: React.ReactNode;
//   action?: ToastActionElement;
//   duration?: number;
// };

// interface State {
//   toasts: ToasterToast[];
// }

// type Action =
//   | { type: "ADD"; toast: ToasterToast }
//   | { type: "UPDATE"; toast: Partial<ToasterToast> & { id: string } }
//   | { type: "DISMISS"; id?: string }
//   | { type: "REMOVE"; id?: string };

// /* -------------------------------------------------------------------------- */
// /*                                  REDUCER                                   */
// /* -------------------------------------------------------------------------- */

// function reducer(state: State, action: Action): State {
//   switch (action.type) {
//     case "ADD":
//       return {
//         ...state,
//         toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
//       };

//     case "UPDATE":
//       return {
//         ...state,
//         toasts: state.toasts.map((t) =>
//           t.id === action.toast.id ? { ...t, ...action.toast } : t,
//         ),
//       };

//     case "DISMISS":
//       return {
//         ...state,
//         toasts: state.toasts.map((t) =>
//           action.id === undefined || t.id === action.id
//             ? { ...t, open: false }
//             : t,
//         ),
//       };

//     case "REMOVE":
//       return {
//         ...state,
//         toasts:
//           action.id === undefined
//             ? []
//             : state.toasts.filter((t) => t.id !== action.id),
//       };

//     default:
//       return state;
//   }
// }

// /* -------------------------------------------------------------------------- */
// /*                              EXTERNAL STORE                                */
// /* -------------------------------------------------------------------------- */

// let memoryState: State = { toasts: [] };
// const listeners = new Set<(state: State) => void>();
// const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

// function notify() {
//   listeners.forEach((listener) => listener(memoryState));
// }

// function dispatch(action: Action) {
//   memoryState = reducer(memoryState, action);
//   notify();
// }

// /* -------------------------------------------------------------------------- */
// /*                              TIMER MANAGEMENT                              */
// /* -------------------------------------------------------------------------- */

// function scheduleRemoval(id: string, duration: number) {
//   if (toastTimeouts.has(id)) return;

//   const timeout = setTimeout(() => {
//     toastTimeouts.delete(id);
//     dispatch({ type: "REMOVE", id });
//   }, duration);

//   toastTimeouts.set(id, timeout);
// }

// function clearRemoval(id: string) {
//   const timeout = toastTimeouts.get(id);
//   if (timeout) {
//     clearTimeout(timeout);
//     toastTimeouts.delete(id);
//   }
// }

// /* -------------------------------------------------------------------------- */
// /*                                  API                                        */
// /* -------------------------------------------------------------------------- */

// type ToastInput = Omit<ToasterToast, "id">;

// export function toast(props: ToastInput) {
//   const id = crypto.randomUUID();
//   const duration = props.duration ?? DEFAULT_TOAST_DURATION;

//   dispatch({
//     type: "ADD",
//     toast: {
//       ...props,
//       id,
//       duration,
//       open: true,
//       onOpenChange: (open) => {
//         if (!open) dismiss(id);
//       },
//     },
//   });

//   scheduleRemoval(id, duration);

//   return {
//     id,
//     update: (newProps: Partial<ToasterToast>) =>
//       dispatch({ type: "UPDATE", toast: { ...newProps, id } }),
//     dismiss: () => dismiss(id),
//   };
// }

// export function dismiss(id?: string) {
//   if (id) {
//     clearRemoval(id);
//   } else {
//     memoryState.toasts.forEach((t) => clearRemoval(t.id));
//   }

//   dispatch({ type: "DISMISS", id });
// }

// /* -------------------------------------------------------------------------- */
// /*                                  HOOK                                       */
// /* -------------------------------------------------------------------------- */

// export function useToast() {
//   const [state, setState] = React.useState<State>(memoryState);

//   React.useEffect(() => {
//     listeners.add(setState);
//     return () => {
//       listeners.delete(setState);
//     };
//   }, []);

//   return {
//     ...state,
//     toast,
//     dismiss,
//   };
// }
