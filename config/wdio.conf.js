// config/wdio.conf.js
exports.config = {
    runner: 'local',
    
    // ✅ CORRIGIDO: Path correto para os specs
    specs: [
        '../test/specs/**/*.spec.js'
    ],
    
    exclude: [
        // 'path/to/excluded/files'
    ],
    
    maxInstances: 10,
    
    services: [
        'chromedriver',
        // 'edgedriver'
    ],

    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--headless', '--disable-gpu', '--window-size=1920,1080', '--start-maximized']
            }
        }
    ],
    
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    
    framework: 'mocha',
    
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // ✅ CORRIGIDO: Hook before com tratamento de erro
    before: function (capabilities, specs) {
        console.log('🔧 Configurando ambiente de teste...');
        
        try {
            // Tentar importar o submodule
            const testDataModule = require('../shared/automation-test-data-factory/dist');
            
            if (testDataModule && testDataModule.UserGenerator) {
                // Registrar globalmente
                global.TestDataGenerator = testDataModule.UserGenerator;
                global.generateUser = testDataModule.UserGenerator.generateNewFakeUser;
                global.generateUserForCountry = testDataModule.UserGenerator.generateUserForCountry;
                
                console.log('✅ TestDataGenerator registrado globalmente');
                
                // Testar se funciona
                const testUser = global.generateUser({ country: 'United States' });
                console.log('✅ Teste de geração bem-sucedido:', testUser.name);
                
            } else {
                throw new Error('UserGenerator não encontrado no módulo importado');
            }
            
        } catch (error) {
            console.error('❌ Erro ao configurar TestDataGenerator:', error.message);
            console.error('Stack:', error.stack);
            
            // Não falhar o teste, apenas avisar
            console.warn('⚠️ Continuando sem TestDataGenerator global. Use importação direta nos testes.');
        }
    },

    // ✅ Hook afterTest mantido
    afterTest: async (test, context, { error, result }) => {
        if (error || result === 1) {
            await browser.takeScreenshot();
        }
    }
};