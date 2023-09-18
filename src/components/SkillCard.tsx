import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";


interface SkillCardProps extends TouchableOpacityProps {
   skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
   return (
      <TouchableOpacity
         style={styles.buttonSkill}
         {...rest}>
         <Text style={styles.TextSkill}>{skill}</Text>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   buttonSkill: {
      backgroundColor: "#1F1e25",
      padding: 15,
      borderRadius: 50,
      alignItems: "center",
      marginVertical: 10,
   },

   TextSkill: {
      color: "#FFF",
      fontSize: 22,
      fontWeight: "bold",
   },
});
