import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export const LoginPage = () => {
  // Hooks de botcitos (forma mas basica de creación de estados)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({msg: 'Enviando formulario...' , loginData: {email, password}});
  }

  return (
    <div className="p-10 xs:p-0 mx-auto md: w-full md:max-w-md -my-18">
      <h1 className="font-bold text-center text-2xl mb-5 text-unah-blue">
        Iniciar Sesión
      </h1>
      <div className="bg-white shadow text-sm rounded-lg divide-y divide-gray-200">
        <form onSubmit={handleSubmit} className="px-5 py-7">
          <label
            className="font-semibold text-sm text-gray-600 pb-1 block"
            htmlFor="email"
          >
            Correo electrónico
          </label>
          <input
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <label
            className="font-semibold text-sm text-gray-600 pb-1 block"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button
            className="transition duration-200 bg-unah-blue hover:bg-unah-blueLight focus:bg-unah-blueLight focus:shadow-sm focus:ring-4 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            type="submit"
          >
            <span className="inline-block mr-2">Ingresar</span>
            <FaArrowRight className="w-4 h-4 inline-block"/>
          </button>
        </form>
      </div>
    </div>
  );
};
