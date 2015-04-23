<?php
namespace DDFA\Map\Controller\Module\DDFA;

/*                                                                        *
 * This script belongs to the TYPO3 Flow package "DDFA.Map".              *
 *                                                                        *
 *                                                                        */

use DDFA\Map\Controller\Module;
use DDFA\Map\Domain\Model\IniLocation;
use DDFA\Map\Domain\Repository\IniLocationRepository;
use TYPO3\Flow\Annotations as Flow;
use TYPO3\Flow\Persistence\Generic\PersistenceManager;
use TYPO3\Neos\Controller\Module\AbstractModuleController;

/**
 * The TYPO3 User Settings module controller
 *
 * @Flow\Scope("singleton")
 */
class LocationsModuleController extends AbstractModuleController
{
    /**
     * @Flow\Inject
     * @var PersistenceManager
     */
    protected $persistenceManager;

    /**
     * @Flow\Inject
     * @var IniLocationRepository
     */
    protected $iniLocationRepository;

    /**
     * @return void
     */
    public function indexAction()
    {
        $locations = $this->iniLocationRepository->findAll();
        $this->view->assign('locations', $locations);
    }

    /**
     * @param IniLocation $location
     * @return void
     */
    public function viewAction(IniLocation $location)
    {
        $this->view->assign('l', $location);
    }

    /**
     * @return void
     */
    public function addAction()
    {

    }

    /**
     * @param IniLocation $newLocation
     * @return void
     * @throws \TYPO3\Flow\Persistence\Exception\IllegalObjectTypeException
     */
    public function createAction(IniLocation $newLocation)
    {
        $this->iniLocationRepository->add($newLocation);
        $this->addFlashMessage('Created a new location. \\o/');
        $this->redirect('index');
    }

    /**
     * @param IniLocation $location
     * @return void
     */
    public function editAction(IniLocation $location)
    {
        $this->view->assign('updateLocation', $location);
    }

    /**
     * @param IniLocation $updateLocation
     * @return void
     * @throws \TYPO3\Flow\Persistence\Exception\IllegalObjectTypeException
     */
    public function updateAction(IniLocation $updateLocation)
    {
        $this->iniLocationRepository->update($updateLocation);
        $this->addFlashMessage('Updated location.');
        $this->redirect('index');
    }

    /**
     * @param IniLocation $location
     * @return void
     * @throws \TYPO3\Flow\Persistence\Exception\IllegalObjectTypeException
     */
    public function deleteAction(IniLocation $location)
    {
        $this->iniLocationRepository->remove($location);
        $this->persistenceManager->persistAll();
        $this->addFlashMessage('Removed location.');
        $this->redirect('index');
    }

}