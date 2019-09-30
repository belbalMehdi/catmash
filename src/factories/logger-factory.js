const winston = require('winston');

/**
 * Factory de generation de logger dans un format logstash
 * La method prends deux parametres et retourne un object logger
 * #loggerName : qui utilisé comme nom du fichier de log correspondant
 * #options (optionnel): un object avec comme clés optionnels "level" pour le niveau de log (par defaut cette valeur est a info)
 *            et "label" comme label du logger (par defaut cette valeur est egal au loggerName)
 */

exports.loggerFactory = function(loggerName, options={}){
    return winston.createLogger({
        level: options.level||'info',
        format: winston.format.combine(
            winston.format.label({label:options.label||loggerName}),
            winston.format.timestamp(),
            winston.format.logstash()
        ),
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({
                filename : `${require.main.path}/../logs/${loggerName}.log`
            })
        ]
    })
}