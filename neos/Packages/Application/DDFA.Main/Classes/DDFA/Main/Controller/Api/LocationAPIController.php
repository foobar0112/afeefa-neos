<?php

namespace DDFA\Main\Controller\Api;

/*                                                                        *
 * This script belongs to the TYPO3 Flow package "DDFA.Main".             *
 *                                                                        *
 *                                                                        */

use DDFA\Main\Domain\Model\Location;
use DDFA\Main\Domain\Repository\LocationRepository;
use TYPO3\Flow\Annotations as Flow;
use TYPO3\Flow\Mvc\Controller\ActionController;
use TYPO3\Flow\Mvc\View\JsonView;
use TYPO3\Flow\Mvc\View\ViewInterface;
use TYPO3\Flow\Property\TypeConverter\PersistentObjectConverter;

class LocationAPIController extends ActionController
{
    /**
     * @Flow\Inject
     * @var LocationRepository
     */
    protected $locationRepository;

    protected $viewFormatToObjectNameMap = ['json' => JsonView::class];

    /**
     * @var array
     */
    protected $supportedMediaTypes = array('application/json');

    /**
     * @param string $locale
     */
    public function listAction($locale = 'de')
    {
        $this->view->assign('value', ['locations' => $this->locationRepository->findAllSupplemented($locale, true)]);
    }

    /**
     * @param Location $location
     * @param string $locale
     */
    public function showAction(Location $location, $locale = 'de')
    {
        $location = $this->locationRepository->findOneSupplemented($location, $locale, true);
        $this->view->assign('value', ['location' => $location]);
    }

    public function createAction(Location $location)
    {
        if ($location != null) {
            $this->locationRepository->add($location);
            $this->response->setStatus(201);
            $this->view->assign('value', ['location' => $location]);
        } else {
            $this->response->setStatus(412);
        }
    }

    protected function initializeView(ViewInterface $view)
    {
        if ($view instanceof JsonView) {
            $locationConfiguration = [
                '_descend' => [
                    'marketEntry' => [
                        '_exclude' => [
                            '__isInitialized__',
                            'internalComment',
                            'locale',
                            'parentEntry',
                            'published',
                            'speakerPrivate'
                        ],
                        '_descend' => [
                            'category' => [
                                '_exclude' => [
                                    '__isInitialized__',
                                    'description',
                                    'locale'
                                ]
                            ]
                        ]
                    ]
                ],
                '_exclude' => [
                    'locale'
                ]
            ];
            $view->setConfiguration([
                'value' => [
                    'locations' => ['_descendAll' => $locationConfiguration],
                    'location' => $locationConfiguration
                ]
            ]);
        }
    }

    protected function initializeCreateAction()
    {
        $config = $this->arguments['location']->getPropertyMappingConfiguration();
        $config->setTypeConverterOption('TYPO3\Flow\Property\TypeConverter\PersistentObjectConverter', PersistentObjectConverter::CONFIGURATION_CREATION_ALLOWED, TRUE);
        $config->allowAllProperties();
    }
}