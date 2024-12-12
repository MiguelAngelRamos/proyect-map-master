Sí, para usar **EAS (Expo Application Services)**, necesitas instalar el paquete de CLI (Command Line Interface) de **Expo**, que incluye el comando `eas`. Este paquete no viene incluido por defecto al instalar Expo CLI estándar, por lo que debes instalarlo manualmente.

---

### **Pasos para Configurar y Usar `eas`**

#### **1. Instalar EAS CLI**
Ejecuta este comando en tu terminal para instalar EAS CLI globalmente:
```bash
npm install -g eas-cli
```

Esto hará que el comando `eas` esté disponible en tu sistema.

---

#### **2. Verifica la Instalación**
Confirma que `eas` se instaló correctamente ejecutando:
```bash
eas --version
```

Deberías ver algo como:
```plaintext
eas-cli/3.x.x darwin-x64 node-v16.x.x
```

---

#### **3. Inicia Sesión en tu Cuenta de Expo**
Para usar **EAS**, necesitas iniciar sesión con una cuenta de Expo. Si no tienes una, puedes crearla en [expo.dev](https://expo.dev).

Ejecuta:
```bash
eas login
```

Introduce tus credenciales de Expo o regístrate si no tienes una cuenta.

---

#### **4. Configura EAS en tu Proyecto**
Una vez que tengas instalado `eas-cli` y hayas iniciado sesión, configura EAS Build en tu proyecto.

Ejecuta:
```bash
eas build:configure
```

Este comando:
1. Configura tu proyecto para usar **EAS Build**.
2. Genera un archivo `eas.json` en la raíz del proyecto donde defines los perfiles de build.
3. Solicita credenciales si estás configurando una compilación para iOS o Android.

---

#### **5. Requisitos Adicionales**

1. **Expo Managed Workflow:**
   - Si estás usando Expo Managed Workflow, asegúrate de tener `expo-dev-client` instalado:
     ```bash
     expo install expo-dev-client
     ```
   - Esto te permite probar tu aplicación con dependencias nativas.

2. **Expo Config Plugin (Opcional):**
   Si usas librerías nativas como **Mapbox**, necesitarás un plugin para configurar los archivos nativos automáticamente:
   ```bash
   expo install @config-plugins/react-native-mapbox-gl
   ```

3. **Node.js y npm Actualizados:**
   Asegúrate de tener una versión moderna de Node.js (preferiblemente la última versión LTS).

---

### **Revisión Rápida del Proceso**

1. Instala EAS CLI:
   ```bash
   npm install -g eas-cli
   ```
2. Verifica que esté instalado:
   ```bash
   eas --version
   ```
3. Inicia sesión en tu cuenta de Expo:
   ```bash
   eas login
   ```
4. Configura tu proyecto para usar EAS Build:
   ```bash
   eas build:configure
   ```

---

### **¿Qué Sigue Después de Instalar EAS CLI?**
Una vez que tengas `eas-cli` instalado y tu proyecto configurado, puedes proceder a compilar tu aplicación para Android, iOS, o ambas plataformas. Aquí tienes un ejemplo rápido:

1. **Compilar para Android:**
   ```bash
   eas build --profile development --platform android
   ```
2. **Compilar para iOS:**
   ```bash
   eas build --profile development --platform ios
   ```

Si tienes problemas al instalar o configurar `eas-cli`, dime el error que ves y lo solucionamos. 😊