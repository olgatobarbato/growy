import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import styles from "../styles/globals.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const pathName = usePathname();
  // const [dataModal, setDataModal] = useState({});

  // const openModal = () => {
  //   setOpenModal(true);
  // };

  // const closeModal = () => {
  //   setOpenModal(false); // Imposta lo stato per chiudere la modale
  // };

  // const openModal = () => {
  //   switch (pathName) {
  //     // case "/habits":
  //     //   setDataModal({
  //     //     pageTitle: "New Habit",
  //     //     showDateInput: false,
  //     //   });
  //     //   break;

  //     case "/dailies":
  //       setDataModal({
  //         pageTitle: "New Daily",
  //         showDateInput: false,
  //       });
  //       break;

  //     case "/todos":
  //       setDataModal({
  //         pageTitle: "New To-do",
  //         showDateInput: true,
  //       });
  //       break;
  //   }

  //   setOpenModal(true);
  // };
  // useEffect(() => {
  //   setOpenModal(false);
  // }, [pathName]);

  return (
    <SessionProvider session={pageProps.session}>
      {pathName !== "/login" && pathName !== "/" && pathName !== "/signup" && (
        <>
          <Header />
          {/* {isModalOpen && (
            <TaskModal isModalOpen={isModalOpen} closeModal={closeModal} />
          )} */}
          <Component {...pageProps} />
        </>
      )}
      {pathName === "/login" || pathName === "/" || pathName === "/signup" ? (
        <Component {...pageProps} />
      ) : null}
    </SessionProvider>
  );
}

export default MyApp;