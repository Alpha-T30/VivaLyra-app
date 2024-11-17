import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
type authcontextType = {
  session: Session | null;
  user: any;
  isFetching: boolean;
};
const AuthContext = createContext<authcontextType>({
  session: null,
  user: null,
  isFetching: true,
});
export default function AuthContextProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<any>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isFetching, setFetching] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      if (session) {
        const { data: user, error } = await supabase
          .from("users")
          .select("*")
          .eq("id", session.user.id)
          .single();
        if (error) {
          console.log(error.message);
        } else {
          setUser(user);
        }
      }
      setFetching(false);
    };

    fetchUserData();
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ session, user, isFetching }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
