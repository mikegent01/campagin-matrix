

import { playSound } from './common.js';
import { MAP_DATA } from './map-data.js';
import * as map from './maps.js';
import * as renderer from './map-renderer.js';
import { toggleEditMode } from './map-editor.js';
import { resetTransform } from './map-transform.js';

const mapControls = document.getElementById('dynamic-map-controls');

export function renderTabs() {
    if (!mapControls) return;
    mapControls.innerHTML = ''; // Clear everything inside

    const currentPage = window.location.pathname.split('/').pop();
    const relevantGroups = currentPage.includes('midlands') 
        ? ['The Midlands'] 
        : ['Mushroom Kingdom Regions', 'Islands & Outer Realms'];

    const groupedMaps = Object.values(MAP_DATA).reduce((acc, map) => {
        const group = map.group || 'Other Regions';
        if (!acc[group]) acc[group] = [];
        acc[group].push(map);
        return acc;
    }, {});

    relevantGroups.forEach(groupName => {
        if (!groupedMaps[groupName]) return;

        const groupHeader = document.createElement('h4');
        groupHeader.className = 'map-group-header';
        groupHeader.textContent = groupName;
        mapControls.appendChild(groupHeader);
        
        const tabsDiv = document.createElement('div');
        tabsDiv.className = 'map-tabs';
        
        const mapsInGroup = groupedMaps[groupName].sort((a,b) => (a.order || 99) - (b.order || 99));

        tabsDiv.innerHTML = mapsInGroup.map(m => {
            return `<button class="map-tab-btn ${m.id === map.activeMapId ? 'active' : ''}" data-map-id="${m.id}">${m.name}</button>`;
        }).join('');
        
        mapControls.appendChild(tabsDiv);
    });
    
    const modeSelector = document.createElement('div');
    modeSelector.id = 'map-mode-selector';
    modeSelector.innerHTML = `
        <span>Mode:</span>
        <button class="mode-btn ${map.activeMapMode === 'standard' ? 'active' : ''}" data-mode="standard">Standard</button>
        <button class="mode-btn ${map.activeMapMode === 'political' ? 'active' : ''}" data-mode="political">Political</button>
        <button class="mode-btn ${map.activeMapMode === 'economic' ? 'active' : ''}" data-mode="economic">Economic</button>
        <button class="mode-btn ${map.activeMapMode === 'military' ? 'active' : ''}" data-mode="military">Military</button>
        <button class="mode-btn ${map.activeMapMode === 'population' ? 'active' : ''}" data-mode="population">Population</button>
    `;
    mapControls.appendChild(modeSelector);
}

export function setupTabEventListeners() {
    const mapControlsContainer = document.getElementById('dynamic-map-controls');
    if (!mapControlsContainer) return;

    mapControlsContainer.addEventListener('click', e => {
        const tabButton = e.target.closest('.map-tab-btn');
        if (tabButton) {
            playSound('click.mp3');
            const mapId = tabButton.dataset.mapId;
            
            resetTransform();

            if (mapId !== map.activeMapId) {
                map.setActiveMapId(mapId);
                if (map.isEditMode) toggleEditMode(false);
                renderer.renderMap(mapId);
                renderTabs(); // Re-render to update active state
            }
            return;
        }

        const modeButton = e.target.closest('.mode-btn');
        if (modeButton && !modeButton.classList.contains('active')) {
            playSound('confirm.mp3', 0.5);
            map.setActiveMapMode(modeButton.dataset.mode);
            document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
            modeButton.classList.add('active');
            renderer.renderPois();
            renderer.renderMapModeLegend();
        }
    });
}