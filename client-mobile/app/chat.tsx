import SendIcon from "@/lib/icons/SendIcon";
import { useEffect, useRef, useState } from "react";
import { FlatList, Pressable, Text, StyleSheet, TextInput, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


let DATA: any[] = [
  {
    text: 'their message'
  },
  {
    text: 'my message',
    user: 'me'
  }
]




export default function ChatScreen() {
  const insets = useSafeAreaInsets()

  const [messages, setMessages] = useState([...DATA])
  const [message, setMessage] = useState("")

  const flatList = useRef<FlatList | null>(null)

  useEffect(() => {
    flatList.current?.scrollToEnd({ animated: true })
  }, [messages])


  return (
    <View style={{
      flex: 1
      , backgroundColor: "#ccc"
    }}>
      <FlatList
        ref={flatList}

        keyExtractor={(_, index) => String(index)}


        contentContainerStyle={{

          paddingTop: 20
        }}



        data={messages}
        renderItem={({ item }) => {
          return <MessageBlock message={item} />
        }}


      />

      <View style={{
        flexDirection: 'row',
        gap: 10,
        paddingInline: 10
        , paddingBottom: insets.bottom
      }}>
        <TextInput value={message} onChangeText={setMessage} placeholder="Write your message"
          style={{
            backgroundColor: 'white',
            borderWidth: 0,
            borderRadius: 100,
            flex: 1,
            paddingLeft: 20
          }}
        />
        <ButtonSend onPress={() => {
          setMessages(p => {
            if (message.length > 0)
              return [...p, {
                text: message,
                user: 'me'
              }]

            return p
          })
          setMessage("")
        }} />
      </View>
    </View>

  )
}

function MessageBlock(props: any) {
  const { message = {} } = props

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: message.user === 'me' ? 'flex-end' : undefined,
      paddingInline: 10,
      paddingBlock: 5
    }}>

      <View style={[{
        padding: 10,
        borderRadius: 6,
        borderWidth: 1,

      },
      message.user === 'me' ? msgStyle.myBubble : msgStyle.theirBubble
      ]}>
        <Text style={[
          message.user === 'me' ? msgStyle.myText : msgStyle.theirText
        ]}>{message.text}</Text>
      </View>

    </View>
  )
}

function ButtonSend(props: { onPress: () => void }) {
  return <Pressable android_ripple={{
    color: 'mistyrose',
    borderless: true,
    foreground: true
  }} onPress={props.onPress}
    style={{
      borderRadius: 42,
      width: 42, height: 42,
      backgroundColor: 'tomato',
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <SendIcon fill={"black"} style={{
      marginLeft: -3,
    }} />
  </Pressable>
}


const msgStyle = StyleSheet.create({
  myBubble: {
    backgroundColor: 'black'
  },
  myText: {
    color: 'white'
  },

  theirBubble: {
    backgroundColor: 'white',
    borderColor: 'white'
  },
  theirText: {
    color: 'black'
  }
})
