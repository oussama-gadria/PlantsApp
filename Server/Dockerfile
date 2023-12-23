# Utilise une image de base légère de Node.js
FROM node:18.19.0-alpine

# Définit des variables d'environnement pour une meilleure configuration
ENV APP_DIR=/app

# Crée le répertoire de travail
WORKDIR ${APP_DIR}

# Copie les fichiers de package.json et package-lock.json dans l'image
COPY package*.json ./

# Installe les dépendances de l'application
RUN npm install

# Copie le reste des fichiers de l'application dans l'image
COPY . .

# Expose le port sur lequel l'application écoute (si nécessaire)
# EXPOSE 5000

# Définit la commande par défaut pour démarrer l'application
CMD ["npm", "run dev"]