### **Por qué es Necesario Compilar en los Servidores de Expo (EAS Build)**

Expo proporciona dos flujos principales para desarrollar aplicaciones: **Expo Managed Workflow** y **Bare Workflow**. Al usar dependencias que requieren código nativo, como **Mapbox**, es necesario realizar compilaciones personalizadas, y aquí es donde **EAS Build** resulta útil.

#### **Razones para Compilar en los Servidores de Expo:**
1. **Compatibilidad con Dependencias Nativas:**
   - Librerías como **@rnmapbox/maps** requieren cambios en los proyectos nativos de iOS y Android (archivos como `Gradle` o `Podfile`).
   - Al usar **Expo Managed Workflow**, tu proyecto no incluye directamente estas configuraciones nativas, por lo que necesitas que Expo compile por ti en sus servidores.

2. **Infraestructura Sin Configuración Local:**
   - Con **EAS Build**, no necesitas instalar herramientas pesadas como Android Studio o Xcode en tu máquina.
   - Los servidores de Expo manejan toda la infraestructura por ti.

3. **Fácil Distribución y Testing:**
   - EAS Build te genera un archivo APK (Android) o IPA (iOS) listo para probar en dispositivos o subir a tiendas de aplicaciones.
   - Simplifica las pruebas en dispositivos reales o en emuladores.

4. **Personalización sin Complejidad:**
   - Aunque usas Expo Managed Workflow, puedes incluir librerías nativas como Mapbox sin ejectar tu proyecto.

---

### **Pasos que Hicimos para Compilar en los Servidores de Expo**

Aquí está el resumen de los pasos que seguimos para compilar tu aplicación:

---

#### **1. Configuración del Proyecto para EAS Build**
Ejecutamos:
```bash
eas build:configure
```
Esto creó un archivo `eas.json` en la raíz del proyecto, donde definimos perfiles de build. Configuramos el perfil de desarrollo para pruebas:

**`eas.json`**
```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "production": {
      "distribution": "store"
    }
  }
}
```

---

#### **2. Instalación de Dependencias Adicionales**
Instalamos las librerías necesarias para soportar Mapbox y otros requerimientos nativos:
```bash
npm install @rnmapbox/maps
```

Adicionalmente, Expo detectó que faltaba el cliente de desarrollo y nos ofreció instalarlo:
```bash
expo install expo-dev-client
```

---

#### **3. Generación del Build en Android**
Compilamos el proyecto usando el perfil de desarrollo:

```bash
eas build --profile development --platform android
```

Este comando:
- Subió los archivos del proyecto a los servidores de Expo.
- Generó un APK personalizado con soporte para dependencias nativas como Mapbox.
- Nos proporcionó un enlace para descargar el APK.

---

#### **4. Descarga e Instalación del Build**
- Al completar el build, descargamos el APK generado y lo instalamos en un emulador o dispositivo físico.
- Expo también ofreció la opción de instalar directamente en el emulador configurado.

---

#### **5. Pruebas en el Emulador**
- Iniciamos la aplicación en el emulador para probar todas las funcionalidades.
- Verificamos que el mapa con tráfico en tiempo real se renderizara correctamente y que no hubiera errores.

---

### **Beneficios de Este Proceso**
- **Rápido y Automático:** Sin necesidad de configurar herramientas locales como Android Studio o Xcode.
- **Escalabilidad:** Los builds se gestionan en servidores remotos, dejando tu máquina libre para seguir desarrollando.
- **Compatible con Dependencias Nativas:** Te permite usar librerías nativas en un flujo Expo Managed.

---

Si necesitas hacer más builds o publicar tu aplicación en las tiendas de aplicaciones, el flujo es similar. Expo simplifica enormemente este proceso. Si tienes más preguntas o necesitas ayuda con los siguientes pasos, ¡avísame! 😊