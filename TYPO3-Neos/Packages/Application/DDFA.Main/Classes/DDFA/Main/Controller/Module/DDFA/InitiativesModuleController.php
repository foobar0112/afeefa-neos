<?php
namespace DDFA\Main\Controller\Module\DDFA;

/*                                                                        *
 * This script belongs to the TYPO3 Flow package "DDFA.Main".             *
 *                                                                        *
 *                                                                        */

use DDFA\Main\Controller\Module;
use DDFA\Main\Domain\Model\Initiative;
use DDFA\Main\Domain\Repository\InitiativeRepository;
use TYPO3\Flow\Annotations as Flow;
use TYPO3\Flow\Persistence\Generic\PersistenceManager;
use TYPO3\Neos\Controller\Module\AbstractModuleController;

/**
 * The TYPO3 User Settings module controller
 *
 * @Flow\Scope("singleton")
 */
class InitiativesModuleController extends AbstractModuleController
{
    /**
     * @Flow\Inject
     * @var PersistenceManager
     */
    protected $persistenceManager;

    /**
     * @Flow\Inject
     * @var InitiativeRepository
     */
    protected $initiativeRepository;

    /**
     * @return void
     */
    public function indexAction()
    {
        $inis = $this->initiativeRepository->findAll();
        $this->view->assign('inis', $inis);
    }

    /**
     * @param Initiative $ini
     * @return void
     */
    public function viewAction(Initiative $ini)
    {
        $this->view->assign('ini', $ini);
    }

    /**
     * @return void
     */
    public function addAction()
    {

    }

    /**
     * @param Initiative $newInitiative
     * @return void
     * @throws \TYPO3\Flow\Persistence\Exception\IllegalObjectTypeException
     */
    public function createAction(Initiative $newInitiative)
    {
        $this->initiativeRepository->add($newInitiative);
        $this->addFlashMessage('Created a new initiative. \\o/');
        $this->redirect('index');
    }

    /**
     * @param Initiative $ini
     * @return void
     */
    public function editAction(Initiative $ini)
    {
        $this->view->assign('updateInitiative', $ini);
    }

    /**
     * @param Initiative $updateInitiative
     * @return void
     */
    public function updateAction(Initiative $updateInitiative)
    {
        $this->initiativeRepository->update($updateInitiative);
        $this->addFlashMessage('Updated initiative.');
        $this->redirect('index');
    }

    /**
     * @param Initiative $ini
     * @return void
     * @throws \TYPO3\Flow\Persistence\Exception\IllegalObjectTypeException
     */
    public function deleteAction(Initiative $ini)
    {
        $this->initiativeRepository->remove($ini);
        $this->persistenceManager->persistAll();
        $this->addFlashMessage('Removed initiative.');
        $this->redirect('index');
    }

}