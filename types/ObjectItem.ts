import { ImageSourcePropType } from "react-native";
import type { ChatItem } from "./ChatItem";

export interface ObjectItem {
  id: string;
  name: string;
  imageUrl: ImageSourcePropType;
  description: string;
  metadata: string;
  chat: ChatItem[];
}
