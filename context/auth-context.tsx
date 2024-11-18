import { Session } from "@supabase/supabase-js";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import React from "react";

import { supabase } from "../lib/supabase";
import { View } from "react-native";
import { ActivityIndicator, MD2Colors, Text } from "react-native-paper";

type UserType = {
  avatar_url: string;
  created_at: string | null;
  email: string;
  expo_notification_token: string | null;
  id: string;
  stripe_customer_id: string | null;
  type: string | null;
};

type AuthData = {
  session: Session | null;
  mounting: boolean;
  user: UserType | null;
};

const AuthContext = createContext<AuthData>({
  session: null,
  mounting: true,
  user: null,
});

export default function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<UserType | null>(null);
  const [mounting, setMounting] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);

      if (session) {
        console.log("Session fetched: ", session);
        const { data: user, error } = await supabase
          .from("users")
          .select("*")
          .eq("id", session.user.id)
          .single();

        if (error) {
          console.error("Error fetching user: ", error);
        } else {
          setUser(user);
        }
      }

      setMounting(false);
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        console.log("Session from authStateChange: ", session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session, mounting, user }}>
      {mounting ? (
        <View className="flex-1 justify-center items-center flex-row gap-5">
          <Text style={{ color: MD2Colors.blue500 }} variant="headlineLarge">
            Loading...
          </Text>
          <ActivityIndicator
            hidesWhenStopped
            animating={mounting}
            color={MD2Colors.blue500}
            size="large"
          />
        </View>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
