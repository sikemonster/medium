import { Ionicons } from '@expo/vector-icons';
import { RelativePathString, ExternalPathString, useNavigation, useRouter } from 'expo-router';
import React from 'react';
import { SectionList as _SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type Item = {

  label: string
  value?: string
  screen?: RelativePathString | ExternalPathString
}
export type SectionListProps = {
  data: Array<{
    title: string,
    data: Array<Item>
  }>
}
export default function SectionList(props: SectionListProps) {
  const router = useRouter()
  function handleItemPress(item: Item) {

    if (item.screen) {
      router.push(item.screen)
    }

  }
  return <_SectionList
    sections={props.data}
    keyExtractor={(item, index) => item.label + index}
    renderItem={({ item, index, section }) => {

      const radiusTop = index === 0
      const radiusBottom = index === section.data.length - 1

      return <TouchableOpacity
        activeOpacity={item.screen ? 0.5 : 1}
        onPress={item.screen ? () => handleItemPress(item) : undefined}>
        <View style={[styles.item, {
          borderBottomWidth: index === section.data.length - 1 ? 0 : 1,
          borderTopLeftRadius: radiusTop ? 4 : 0,
          borderTopRightRadius: radiusTop ? 4 : 0,
          borderBottomLeftRadius: radiusBottom ? 4 : 0,
          borderBottomRightRadius: radiusBottom ? 4 : 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: "space-between"
        }]}>
          <Text style={styles.title}>{item.label}</Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "space-between",
            gap: 6
          }}>
            <Text style={styles.value}>{item.value}</Text>
            {item.screen &&
              <Ionicons name="chevron-forward-outline" size={16} />
            }
          </View>
        </View>
      </TouchableOpacity>

    }}
    renderSectionHeader={({ section: { title } }) => (
      <Text style={styles.header}>{title}</Text>
    )}
  />
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#ccc',
    paddingInline: 16,
    paddingBlock: 10,
    borderBottomWidth: 1,
    borderColor: '#aaa'
  },
  header: {
    fontSize: 18,
    marginBlock: 10,
    marginTop: 20
  },
  title: {
    fontSize: 16,

  },
  value: {
    fontSize: 14,
    outline: ""
  }
});

