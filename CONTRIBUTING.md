# Contributing to CAFG

Thank you for your interest in contributing to Command And Fleet Game!

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Git
- Basic JavaScript knowledge

### Setup

```bash
# Clone the repository
git clone https://github.com/CKCHDX/CAFG.git
cd CAFG

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

See [README.md](README.md) for detailed structure. Key folders:

- `/src/js/` - Game code
- `/src/css/` - Stylesheets
- `/assets/` - Game assets
- `/docs/DESIGN/` - Design documents
- `/tests/` - Test files

## Development Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Make Changes

- Follow the code style guidelines (see below)
- Update relevant design documents if needed
- Add tests for new functionality

### 3. Test Your Changes

```bash
# Run tests
npm test

# Lint code
npm run lint

# Test in browser
npm run dev
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: Add new feature description"
```

Use conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style
- `refactor:` Code refactoring
- `test:` Tests
- `chore:` Build/dependency changes

### 5. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Create a PR on GitHub with clear description.

## Code Style Guidelines

### JavaScript

- Use ES6+ syntax
- Use camelCase for variables/functions
- Use PascalCase for classes
- Use UPPER_SNAKE_CASE for constants
- Add JSDoc comments for functions
- Keep functions small and focused

```javascript
// Good
function calculateDamage(weapon, armor) {
  /**
   * Calculate final damage after armor reduction
   * @param {Object} weapon - Weapon specs
   * @param {number} armor - Armor reduction %
   * @returns {number} Final damage
   */
  const baseDamage = weapon.damage;
  const armorReduction = baseDamage * (armor / 100);
  return baseDamage - armorReduction;
}

// Avoid
function calc(w, a) {
  return w.d - w.d * (a / 100);
}
```

### File Organization

- One class/primary function per file
- Related utilities in same folder
- Clear, descriptive names
- Logical grouping in directories

### Comments

- Explain *why*, not *what*
- Keep comments updated with code
- Use JSDoc for public APIs

## Testing

### Writing Tests

Create test files alongside code with `.test.js` extension:

```javascript
// src/js/utils/math-utils.test.js
const { calculateDamage } = require('./math-utils');

describe('calculateDamage', () => {
  test('should reduce damage by armor percentage', () => {
    const weapon = { damage: 100 };
    const damage = calculateDamage(weapon, 25);
    expect(damage).toBe(75);
  });
});
```

### Test Coverage

Aim for 80%+ coverage:
```bash
npm test -- --coverage
```

## Documentation

### Updating Docs

When making changes that affect gameplay:

1. Update relevant `/docs/DESIGN/` files
2. Update version number in document header
3. Update last modified date
4. Update status in `/docs/README.md`

### Design Document Template

```markdown
# Document Title

## Overview
[Brief summary]

## Details
[Detailed content]

---

**Document Version**: 1.0  
**Last Updated**: December 27, 2025  
**Status**: [Approved/In Review/Planned]
```

## Git Commit Messages

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Examples

```
feat(combat): Add plasma cannon weapon type

Implement new plasma weapon that deals area damage
and applies burning effect. Balanced against
shields and armor as per combat design doc.

Closes #42
```

```
fix(renderer): Resolve ship sprite clipping at map edges

Previously ships would render partially off-screen.
Now properly culled when outside viewport.
```

## Pull Request Process

1. **Title**: Clear, descriptive (`feat: Add feature name`)
2. **Description**: What changed and why
3. **Testing**: How to test the changes
4. **Documentation**: Updated design docs if needed
5. **Review**: Address feedback

### PR Template

```markdown
## Description
[What this PR does]

## Testing
[How to test]

## Checklist
- [ ] Code follows style guidelines
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No breaking changes

## Related Issues
Closes #[issue number]
```

## Reporting Issues

### Bug Reports

Include:
- Description of bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser/OS info

### Feature Requests

Include:
- Clear description
- Use case/why needed
- Proposed implementation (optional)
- Design doc updates (if major feature)

## Performance Guidelines

- Maintain 60 FPS on target hardware
- Profile code with Chrome DevTools
- Minimize allocations in game loop
- Use object pooling for frequent objects
- Profile memory usage

## Questions?

1. Check documentation in `/docs/`
2. Search existing issues
3. Ask in discussions
4. Contact maintainers

---

**Thank you for contributing! 🚀**
