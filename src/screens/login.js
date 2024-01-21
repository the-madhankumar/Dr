import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';

export default function Login() {
    const navigation = useNavigation();

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        alt=""
                        resizeMode="contain"
                        style={styles.headerImg}
                        source={{
                            uri: '../assets/login.png',
                        }}
                    />

                    <Text style={styles.title}>
                        <Text style={{ color: '#FFA500' }}>Dr.Free</Text>
                    </Text>

                    <Text style={styles.subtitle}>
                        Join us. Embrace a drug-free life with our empowering community app
                    </Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Email address</Text>

                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            onChangeText={(email) => setForm({ ...form, email })}
                            placeholder="Enter your email here..."
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            value={form.email}
                        />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Password</Text>

                        <TextInput
                            autoCorrect={false}
                            onChangeText={(password) => setForm({ ...form, password })}
                            placeholder="Enter your password here....."
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            secureTextEntry={true}
                            value={form.password}
                        />
                    </View>

                    <View style={styles.formAction}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Home');
                            }}
                        >
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>Sign in</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            // handle sign up
                        }}
                        style={{ marginTop: 'auto' }}
                    >
                        <Text style={styles.formFooter}>
                            Don't have an account?{' '}
                            <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    title: {
        fontSize: 27,
        fontWeight: '700',
        color: '#FFA500',
        marginBottom: 6,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292',
        textAlign: 'center',
    },
    /** Header */
    header: {
        marginVertical: 36,
    },
    headerImg: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginBottom: 36,
    },
    /** Form */
    form: {
        marginBottom: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    formAction: {
        marginVertical: 24,
    },
    formFooter: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        textAlign: 'center',
        letterSpacing: 0.15,
    },
    /** Input */
    input: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        marginBottom: 8,
    },
    inputControl: {
        height: 44,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
    },
    /** Button */
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: '#FFA500',
        borderColor: '#FFA500',
    },
    btnText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
        color: '#fff',
    },
});