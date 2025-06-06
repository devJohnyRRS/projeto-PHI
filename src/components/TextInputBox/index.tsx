import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { BellSimple, BellSimpleRinging, MagnifyingGlass } from 'phosphor-react-native'
import theme from '../../assets/themes/THEMES'
import CustomImput from '../customInput/CustomInput'

export default function TextInputBox( { style }: any) {
  
  return (
          <View style={{ width: '100%', position: 'relative', bottom: -225, right: 0, left: 0}}>
                    <CustomImput
                        placeholder="Escreva sua mensagem"
                        placeholderTextColor={theme.colors.gray}
                        keyboardType="default"
                        errorMessage="Preencha o campo"  
                    />
                </View>
                );
}