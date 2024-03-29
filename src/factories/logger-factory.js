const winston = require('winston');

/**
 * Factory de generation de logger dans un format logstash
 * La method prends deux parametres et retourne un object logger
 * @property loggerName : qui utilisé comme nom du fichier de log correspondant
 * @property options (optionnel): un object avec comme clés optionnels "level" pour le niveau de log (par defaut cette valeur est a info)
 * et "label" comme label du logger (par defaut cette valeur est egal au loggerName)
 */

exports.loggerFactory = function(loggerName, options={}){
    return winston.createLogger({
        level: options.level||'info',
        format: winston.format.combine(
            winston.format.label({label:options.label||loggerName}),
            winston.format.timestamp(),
            winston.format.simple()
        ),
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({
                filename : `${require.main.path}/../logs/${loggerName}.log`
            })
        ]
    })
}